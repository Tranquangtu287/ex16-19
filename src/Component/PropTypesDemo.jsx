import React from 'react';
import AnimalCard from './AnimalCard';
import animals from './animals';

export default function PropTypesDemo() {
  const showAdditionalData = (additional) => {
  
    if (!additional) {
      alert('No Additional Information');
      return;
    }
    
    const information = Object.entries(additional)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
    alert(information);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Animals</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {animals.map((animal) => (
          <AnimalCard
            key={animal.name}
            name={animal.name}
            scientificName={animal.scientificName}
            size={animal.size}
            diet={animal.diet}
            additional={animal.additional}
            showAdditional={showAdditionalData}
            image={animal.image}
          />
        ))}
      </div>
    </div>
  );
}