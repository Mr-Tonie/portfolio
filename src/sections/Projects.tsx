export default function Projects() {
  return (
    <section className="section">
      <h3>Projects</h3>

      <article className="project">
        <h4>FinT26</h4>

        <p><strong>Problem:</strong> Manual management of Financial Transactions,
        leading to errors and poor financial management and record tracking.</p>

        <p><strong>Solution:</strong> Designed a web application for financial transactions tracking, savings and Investments. </p>

        <p><strong>Stack:</strong> React, TypeScript, REST API, SQL</p>

        <p><strong>Focus:</strong> Financial management, Investments tracking, Savings tracking, Financial reporting.</p>

        <p><strong>Key Features:</strong> Potfolio dashboard for displaying samarised data| Investments tracking section | Tra</p>

        <div className="project-links">
          <a href="https://github.com/yourusername/bus-ticketing" target="_blank" rel="noopener noreferrer" className="project-link">
            View Source Code
          </a>
          <a href="https://bus-ticketing-demo.vercel.app" target="_blank" rel="noopener noreferrer" className="project-link secondary">
            Live Demo
          </a>
        </div>
      </article>

       <article className="project">
        <h4>Bus Ticketing Administration System</h4>

        <p><strong>Problem:</strong> Manual management of routes, schedules, and transactions
        leads to errors and poor accountability.</p>

        <p><strong>Solution:</strong> Designed an admin system with role-based access,
        structured data models, and modular layouts.</p>

        <p><strong>Stack:</strong> React, TypeScript, REST API, SQL</p>

        <p><strong>Focus:</strong> Data integrity, access control, maintainability.</p>

        <p><strong>Key Features:</strong> Multi-role authentication system, real-time 
        route management, transaction logging with audit trails, automated reporting 
        dashboard, and responsive admin interface.</p>

        <div className="project-links">
          <a href="https://github.com/yourusername/bus-ticketing" target="_blank" rel="noopener noreferrer" className="project-link">
            View Source Code
          </a>
          <a href="https://bus-ticketing-demo.vercel.app" target="_blank" rel="noopener noreferrer" className="project-link secondary">
            Live Demo
          </a>
        </div>
      </article>

    </section>
  );
}