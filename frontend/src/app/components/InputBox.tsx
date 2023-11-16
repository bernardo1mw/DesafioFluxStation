import React from "react";


interface Props extends React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
  labelText?: string;
  error?: boolean;
	select?: boolean
}

const InputBox = ({ labelText, select, error, ...props }: Props) => {
  return (
    <div className={props.className}>
      <label
        className={`block text-slate-200  mb-2 text-xs lg:text-sm xl:text-base `}
      >
        {labelText}
      </label>
			{ !select && (
      <input
        className={`border  rounded-md disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-slate-50   
             `}
        {...props}
      >
			</input>) || (
			
			<select name={props.name} className={`border  rounded-md disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-slate-50 
			`} onChange={props.onChange}>
					<option value="default">-</option>	
					<option value="Gasolina Comum">Gasolina Comum</option>
					<option value="Gasolina Aditivada">Gasolina Aditivada</option>
					<option value="Etanol">Etanol</option>
					<option value="Etanol aditivado">Etanol aditivado</option>
					<option value="GNV">GNV</option>
					<option value="Diesel">Diesel</option>
				</select>)}
    </div>
  );
};

export default InputBox;