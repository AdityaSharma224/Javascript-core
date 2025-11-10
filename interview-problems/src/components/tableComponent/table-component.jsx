import React from 'react';
import { FixedSizeList as List } from 'react-window';

export default function VirtualizedTable() {
  const rows = React.useMemo(
    () =>
      Array.from({ length: 1000 }, (_, i) => ({
        id: i + 1,
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
      })),
    []
  );

  const Row = ({ index, style }) => {
    const row = rows[index];
    return (
      <div
        style={{
          ...style,
          display: 'flex',
          borderBottom: '1px solid #eee',
          padding: '8px',
          background: index % 2 ? '#f9f9f9' : 'white',
        }}
      >
        <div style={{ width: '60px' }}>{row.id}</div>
        <div style={{ flex: 1 }}>{row.name}</div>
        <div style={{ flex: 2 }}>{row.email}</div>
      </div>
    );
  };

  return (
    <div style={{ border: '1px solid #ccc', width: '100%', maxWidth: 600, margin: 'auto' }}>
      <div
        style={{
          display: 'flex',
          background: '#f1f1f1',
          fontWeight: 'bold',
          padding: '8px',
        }}
      >
        <div style={{ width: '60px' }}>ID</div>
        <div style={{ flex: 1 }}>Name</div>
        <div style={{ flex: 2 }}>Email</div>
      </div>

      <List
        height={400} // visible height
        itemCount={rows.length}
        itemSize={40} // row height
        width="100%"
      >
        {Row}
      </List>
    </div>
  );
}
