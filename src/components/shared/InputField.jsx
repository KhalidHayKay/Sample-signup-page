const InputField = ({ type, id, placeholder, value, label, onChange }) => {
	return (
		<div className='flex flex-col text-primary-content'>
			<label htmlFor={id} className='text-sm mb-2'>
				{label}
			</label>
			<input
				type={type}
				name={id}
				id={id}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className='border border-primary-content/20 focus:border-secondary-content py-2 px-4 outline-none rounded'
			/>
		</div>
	);
};

export default InputField;
