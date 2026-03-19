export default function SectionWrapper({ children, className = "", id = "" }) {
  return (
    <section 
      id={id} 
      className={`w-full ${className}`}
    >
      <div className="container mx-auto px-4 md:px-2">
        {children}
      </div>
    </section>
  );
}
