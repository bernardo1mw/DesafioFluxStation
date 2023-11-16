"use client"
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import {FormProvider, useForm, SubmitHandler } from 'react-hook-form'
import moment from 'moment';
import { BACKEND_URL } from '../lib/constants';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';


type FormInputs = {
  licensePlate: string;
  fuel: string;
  date: Date | undefined;
	quantity: string
};

const Form = () => {

  const { data: session } = useSession();

  
	const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>()
	
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
		const res = await fetch(BACKEND_URL + '/refuel/register', {
      method: 'POST',
      body: JSON.stringify({
      quantity: data.quantity,
			licensePlate: data.licensePlate,
			fuel: data.fuel,
			refuelDate: data.date
      }),
      headers: {
				authorization: `Bearer ${session?.backendTokens.token}`,
        'Content-Type': 'application/json',
      },
    });
		console.log(res);
		
    if (!res.ok) {
      alert(res.statusText);
      return;
    }
    alert('Abastecimento Registrado!');
		//console.log(data)
	}
	 
	return (

		<div className="mx-auto my-20 shadow-2xl shadow-[#4561ae] rounded overflow-hidden mx max-w-[800px] bg-[#4561ae]">
			
		  <div className="px-4 py-2 text-slate-200 font-bold">
        Sign up
      </div>
      <div className="px-10 py-5 flex flex-col gap-6">
				<div>

			
		<form onSubmit={handleSubmit(onSubmit)}>

		<div className="block  mb-2 text-xs lg:text-sm xl:text-base">
      <label className='block text-slate-200  mb-2 text-xs lg:text-sm xl:text-base'>Placa</label>
      <input {...register("licensePlate", {required: true, pattern: RegExp('^[a-zA-Z]{3}[0-9][A-Za-z0-9][0-9]{2}$') })} type='text' className=' border rounded-md disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-slate-50'/>
    </div>
		{errors.licensePlate && <span className='text-red-500 font-medium'>This field is required</span>}


		<div className=" block  mb-2 text-xs lg:text-sm xl:text-base">
      <label className='block text-slate-200  mb-2 text-xs lg:text-sm xl:text-base'>Combustível</label>
   		<select {...register("fuel", {required: true,})} className={`border  rounded-md disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-slate-50 
			`} >
					<option value="Gasolina Comum">Gasolina Comum</option>
					<option value="Gasolina Aditivada">Gasolina Aditivada</option>
					<option value="Etanol">Etanol</option>
					<option value="Etanol aditivado">Etanol aditivado</option>
					<option value="GNV">GNV</option>
					<option value="Diesel">Diesel</option>
				</select>
		</div>
		{errors.fuel && <span className='text-red-500 font-medium'>Selecione um combustível</span>}

		<div className=" block  mb-2 text-xs lg:text-sm xl:text-base">
      <label className='block text-slate-200  mb-2 text-xs lg:text-sm xl:text-base'>Data</label>
      <input max={moment().format("YYYY-MM-DD")} {...register("date", {required: true,})} type='date' className=' border rounded-md disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-slate-50'/>
    </div>
		{errors.date && <span className='text-red-500 font-medium'>Selecione a data do abastecimento</span>}


		
		<div className=" block  mb-2 text-xs lg:text-sm xl:text-base">
      <label className='block text-slate-200  mb-2 text-xs lg:text-sm xl:text-base'>Quantidade</label>
      <input min='1' {...register("quantity", {required: true,})} type='number' className=' border rounded-md disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-slate-50'/>
    </div>
		{errors.quantity && <span className='text-red-500 font-medium'>Selecione a quantidade abastecida em litros</span>}


		<div className="flex justify-center items-center gap-5">
          
					<input type='submit' className='group hover:font-semibold text-white rounded-md px-4 py-2 my-3 hover:px-6 hover:py-3  focus:bg-pink-700 bg-pink-600   hover:duration-[500ms]'/>
						
          <Link className="group  hover:bg-slate-300 hover:duration-[700ms] hover:text-slate-900 text-slate-200 px-4 py-2 rounded-md" href={"/"}>
            Cancel
          </Link>
        </div>
		</form>
		</div>
      </div>
    </div>
	)
}

export default Form