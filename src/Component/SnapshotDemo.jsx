import React, { useState, useRef } from 'react';

export default function SnapshotDemo() {
  const [count, setCount] = useState(0);
  // Dùng useRef để lưu lại giá trị snapshot mà không bị mất đi khi component render lại
  const snapshotRef = useRef(0);

  // Hàm tăng count
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Hàm lưu snapshot hiện tại
  const handleTakeSnapshot = () => {
    snapshotRef.current = count;
    alert(`Đã lưu snapshot với giá trị: ${count}`);
  };

  // Hàm khôi phục lại giá trị đã lưu
  const handleRestoreSnapshot = () => {
    setCount(snapshotRef.current);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>State as a Snapshot Demo</h2>
      <p>Count: {count}</p>
      
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleTakeSnapshot}>Take Snapshot</button>
        <button onClick={handleRestoreSnapshot}>Restore Snapshot</button>
      </div>
    </div>
  );
}