import React from 'react';
import EventHandlingDemo from './EventHandlingDemo';
import RenderAndCommitDemo from './RenderAndCommitDemo'; // Sửa ở đây (bỏ chữ Component/)
import SnapshotDemo from './Component/SnapshotDemo';
import PropTypesDemo from './Component/PropTypesDemo';

function App() {
  return (
    <React.StrictMode>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        
        {/* Bài 16 */}
        <section style={{ marginBottom: '40px', padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <EventHandlingDemo />
        </section>

        <hr />

        {/* Bài 17 */}
        <section style={{ margin: '40px 0', padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <RenderAndCommitDemo />
        </section>

        <hr />

        {/* Bài 18 */}
        <section style={{ margin: '40px 0', padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <SnapshotDemo />
        </section>

        <hr />

        {/* Bài 19 */}
        <section style={{ marginTop: '40px', padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <PropTypesDemo />
        </section>

      </div>
    </React.StrictMode>
  );
}

export default App;