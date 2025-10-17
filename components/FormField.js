// This is a reusable form input component.
// used props:
// - label: The text label for the input field
// - name: The name/id for the input (used for form handling)
// - type: The input type (default is 'text')
// - value: Current value of the input field
// - onChange: Event handler for input value change

export default function FormField({ label, name, type = 'text', value, onChange }) {
  return (
    <div className="form-group">
      {/* Label linked to the input by 'htmlFor' */}
      <label htmlFor={name}>{label}</label>

      {/* Input field bound to props; 'required' ensures field can't be left empty */}
      <input 
        id={name} 
        name={name} 
        type={type} 
        value={value} 
        onChange={onChange} 
        required 
      />
    </div>
  );
}
