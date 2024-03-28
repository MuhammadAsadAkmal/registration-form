import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

export const ChallanForm = () => {
	const [studentName, setStudentName] = useState('');
	const [fatherName, setFatherName] = useState('');
	const [course, setCourse] = useState('Digital marketing');

	const handleSubmit = (e) => {
		e.preventDefault();

		try {
			generateChallanPDF();

			setStudentName('');
			setFatherName('');
			setCourse('');
		} catch (error) {
			console.log(error);
		}
		// reset the form
	};
	const generateChallanPDF = () => {
		const doc = new jsPDF('landscape');
		const currentTime = new Date().toLocaleString();
		const unixtime = new Date().getTime();
		const commonDetails = [
			{ label: 'Challan No:', value: unixtime }, // Example value
			{ label: 'Account Title:', value: 'Muhammad Uzair' }, // Example value
			{ label: 'Account Number:', value: '0293291137005' }, // Example value
			{ label: 'Bank Name:', value: 'United Bank limited (UBL)' }, // Example value
			{ label: 'Registration Fee:', value: 'Rs 5000' }, // Example value
			{ label: 'Total:', value: 'Rs 5000' }, // Example value
		];

		doc.text('Light House development ', 10, 10);
		doc.rect(5, 15, 287, 70);
		doc.text('Bank Copy', 10, 20);

		doc.line(0, 25, 300, 25);
		let y = 31;
		commonDetails.forEach((detail) => {
			doc.text(`${detail.label} ${detail.value}`, 10, y);
			y += 10;
		});
		doc.text(`Student Name: ${studentName}`, 10, y);
		doc.text(`Father Name: ${fatherName}`, 10, y + 10);
		doc.text(`Course: ${course}`, 10, y + 20);
		doc.text(`Payment Methode`, 10, y + 30);
		doc.text(`online _____________`, 10, y + 40);
		doc.text(`By Hand ____________`, 10, y + 50);
		doc.text(`For offline payments please visit our campus`, 10, y + 60);
		doc.text(`Admision office signature_____________`, 10, y + 70);
		doc.text(`Student Signature____________`, 10, y + 100);

		doc.text('Light House development ', 150, 10);
		doc.rect(145, 15, 287, 70);
		doc.text('Student Copy', 150, 20);
		doc.line(0, 25, 300, 25);
		y = 31;
		commonDetails.forEach((detail) => {
			doc.text(`${detail.label} ${detail.value}`, 150, y);
			y += 10;
		});
		doc.text(`Student Name: ${studentName}`, 150, y);
		doc.text(`Father Name: ${fatherName}`, 150, y + 10);
		doc.text(`Course: ${course}`, 150, y + 20);
		doc.text(`Payment Methode`, 150, y + 30);
		doc.text(`online _____________`, 150, y + 40);
		doc.text(`By Hand ____________`, 150, y + 50);
		doc.text(`For offline payments please visit our campus`, 150, y + 60);
		doc.text(`Admision office signature_____________`, 150, y + 70);
		doc.text(`Student Signature____________`, 150, y + 100);

		doc.save(`${studentName}_challan_${currentTime}.pdf`);
	};

	const handleStudentNameChange = (e) => {
		setStudentName(e.target.value);
	};

	const handleFatherNameChange = (e) => {
		setFatherName(e.target.value);
	};

	const handleCourseChange = (e) => {
		setCourse(e.target.value);
	};

	return (
		<div className='w-[600px] h-fit bg-white flex flex-col justify-center items-center rounded-lg shadow-lg mt-36 text-black py-4'>
			<p className='text-5xl'>challan form</p>

			<form
				className='my-5'
				onSubmit={handleSubmit}
			>
				<div className='flex flex-col gap-4 p-4'>
					{/* enter student name  */}

					<label htmlFor='student-name'>Student Name</label>
					<input
						type='text'
						id='student-name'
						placeholder='Enter Student Name'
						className='input input-bordered min-w-[580px] bg-white'
						value={studentName}
						onChange={handleStudentNameChange}
						required={true}
					/>

					{/* enter father name  */}
					<label htmlFor='father-name'>Father Name</label>
					<input
						type='text'
						id='father-name'
						placeholder='Enter Father Name'
						className='input input-bordered min-w-[580px] bg-white'
						value={fatherName}
						onChange={handleFatherNameChange}
						required={true}
					/>

					{/* select courses  */}

					<label htmlFor='courses'>Courses</label>
					<select
						name='courses'
						id='courses'
						className='input input-bordered min-w-[580px] bg-white'
						value={course}
						onChange={handleCourseChange}
						required={true}
					>
						<option value='Digital marketing'>Digital marketing</option>
						<option value='Graphic designing'>Graphic designing</option>
						<option value='Mobile app development'>
							Mobile app development
						</option>
						<option value='Website development'>Website development</option>
						<option value='SEO'>SEO</option>
					</select>
				</div>
				<button
					className='bg-gradient-to-r from-[#FFE86A] to-[#FFE86A] text-[#000000] font-bold py-2 px-4 md:py-3 md:px-5 lg:py-4 lg:px-6 mx-10'
					type='submit'
				>
					Create Challan
				</button>
			</form>
			{/* create challan btn */}
		</div>
	);
};
