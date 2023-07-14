import { useState } from 'react'
import z from 'zod';
import './App.css'

function App() {
  const UserSchema = z.object({
    name: z.string().min(1).max(100),
    address: z.string().min(3).max(100),
    number: z.number().int().positive().min(1),
    letter: z.string().min(1).max(1),
    postalCode: z.string().min(5).max(7),
  })

  type User = z.infer<typeof UserSchema>

  const [user, setUser] = useState<User>({
    name: "",
    address: "",
    number: 0,
    letter: "",
    postalCode: "",
  })

  const {name, address, number, letter, postalCode} = user

  return (
		<main className='flex justify-center w-full mx-10 my-7'>
			<form className='border-1 border-gray-500 shadow-md w-[50vw] px-6 py-4 rounded-md mx-5'>
				<h1 className='text-2xl font-bold text-center text-zinc-500 mb-10'>
					Your Info
				</h1>
				<input
					className='my-2 px-3 p-2 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-blue-200 bg-gray-100'
					type='text'
					value={name}
					onChange={(e) => setUser({ ...user, name: e.target.value })}
					placeholder='name'
				/>
				<div className='flex'>
					<input
						className='my-2 px-3 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-200 bg-gray-100 w-3/5 mr-5'
						type='text'
						value={address}
						onChange={(e) =>
							setUser({ ...user, address: e.target.value })
						}
						placeholder='address'
					/>
					<input
						className='my-2 px-3 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-200 bg-gray-100 w-1/5 mr-5'
						type='number'
						value={number}
						onChange={(e) =>
							setUser({ ...user, number: Number(e.target.value) })
						}
						placeholder='number'
					/>
					<select
						className='my-2 px-3 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-200 bg-gray-100 w-1/5 text-gray-400'
						name='letter'
						value={letter}
						onChange={(e) =>
							setUser({ ...user, letter: e.target.value })
						}
						placeholder='letter'>
						<option selected>letter</option>
						<option value='A'>A</option>
						<option value='B'>B</option>
						<option value='C'>C</option>
						<option value='D'>D</option>
						<option value='E'>E</option>
						<option value='F'>F</option>
						<option value='G'>G</option>
					</select>
				</div>

				<input
					className='my-2 px-3 p-2 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-blue-200 bg-gray-100'
					type='text'
					value={postalCode}
					onChange={(e) =>
						setUser({ ...user, postalCode: e.target.value })
					}
					placeholder='postal code'
				/>
			</form>
		</main>
  );
}

export default App
