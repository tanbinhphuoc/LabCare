function ProcessSteps() {
  const steps = [
    {
      number: 'STEP 1',
      title: 'We deliver science that matters',
      description: 'Advancing research into real-world healthcare gains.',
      icon: '🧪'
    },
    {
      number: 'STEP 2',
      title: 'From research to application',
      description: 'Enabling better outcomes through teamwork.',
      icon: '🔬'
    },
    {
      number: 'STEP 3',
      title: 'Translating science into care',
      description: 'We focus on custom lab, pharmacy, and research work.',
      icon: '🧬'
    }
  ]

  return (
    <section className="process-section">
      <div className="container process-container">
        <div className="process-content">
          <span className="process-label">ADVANCING HEALTH WITH SCIENCE</span>
          <h2 className="process-title">Transform patient care through research</h2>
          <p className="process-desc">
            Pharma delivers trusted lab and pharmacy services, supporting science, care, and
            progress in health and research sectors.
          </p>
          <button className="btn btn--cyan">Services</button>
        </div>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <span className="step-number">{step.number}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
              <div className="step-icon">{step.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSteps
