import React, { useState } from "react";

type ProductData = {
  product_id: number;
  title: string;
  price: string;
  sku: string;
};

function App() {
  const [data, setData] = useState<ProductData | null>(null);

  const isElectron = !!(window as any).electron; // Check if running in Electron

  const createFile = async () => {
    if (!isElectron) {
      alert("This feature is only available in Electron.");
      return;
    }
    try {
      const message = await (window as any).electron.writeJson();
      alert(message);
    } catch (error) {
      console.error("Error creating file:", error);
    }
  };

  const readFile = async () => {
    if (!isElectron) {
      alert("This feature is only available in Electron.");
      return;
    }
    try {
      const fileData = await (window as any).electron.readJson();
      setData(fileData);
    } catch (error) {
      console.error("Error reading file:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Data Management</h1>
      <button onClick={createFile} style={{ marginRight: "10px" }}>
        Create JSON File
      </button>
      <button onClick={readFile}>Read JSON File</button>
      {data && (
        <table
          border={1}
          style={{
            marginTop: "20px",
            borderCollapse: "collapse",
            width: "80%",
          }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Title</th>
              <th>Price (INR)</th>
              <th>SKU</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.product_id}</td>
              <td>{data.title}</td>
              <td>{data.price}</td>
              <td>{data.sku}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
