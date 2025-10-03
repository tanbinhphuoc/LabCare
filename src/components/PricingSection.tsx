function PricingSection() {
  const pricingItems = [
    {
      name: 'Routine blood panel',
      description: 'CBC, chemistry, and more',
      price: '$25',
    },
    {
      name: 'Medication delivery',
      description: 'Home drop-off service',
      price: '$20',
    },
    {
      name: 'Lab report analysis',
      description: 'Detailed result review',
      price: '$33',
    },
    {
      name: 'Account setup help',
      description: 'Patient profile setup',
      price: '$35',
    },
    {
      name: 'Pharma consult',
      description: 'One-on-one with expert',
      price: '$22',
    },
  ];

  return (
    <section className="pricing-section">
      <div className="container">
        <div className="pricing-header">
          <span className="pricing-label">PHARMA PRICE GUIDE</span>
          <h2 className="pricing-title">Our lab pricing</h2>
        </div>
        <div className="pricing-list">
          {pricingItems.map((item, index) => (
            <div key={index} className="pricing-item">
              <div className="pricing-item__info">
                <h3 className="pricing-item__name">{item.name}</h3>
                <p className="pricing-item__desc">{item.description}</p>
              </div>
              <div className="pricing-item__line"></div>
              <div className="pricing-item__price">{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
