export default function SectionWrapper({ children, className = "", id = "" }) {
  return (
    <section 
      id={id} 
      className={`w-full ${className}`}
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-16 h-full pb-10 md:pb-20 pb-safe">
        {children}
      </div>
    </section>
  );
}
