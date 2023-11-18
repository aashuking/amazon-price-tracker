"use client"
import { scrapeAndStoreProduct } from '@/lib/actions';
import React, { FormEvent,useState } from 'react'

const isValidAmazonProductURL = (url:string)=>{
    try{
        const parsedURL = new URL(url);
        const hostname= parsedURL.hostname;

        if(hostname.includes('amazon.in')|| hostname .includes('amazon.') || hostname.endsWith('amazon')){
            return true;
        }
    }catch(error){
        return false;
    }
    return false;
}



const Searchbar = () => {
    const[searchPrompt,setsearchPrompt]= useState('');
    const[isLoading,setIsLoading]= useState(false);
    const handleSubmit= async (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const  isValidLink= isValidAmazonProductURL(searchPrompt);
        if(!isValidLink)return alert('Please enter a valid Amazon product Link');
        try{
            setIsLoading(true);
            //Scrape the product page
            const product = await scrapeAndStoreProduct(searchPrompt)
        }catch(error){
            console.log(error);
        }finally{
            setIsLoading(false);
        }

    }
    return (
        <form
        onSubmit={handleSubmit}
        action="" className="flex flex-wrap gap-4 mt-12">
            <input value={searchPrompt} onChange={(e)=> setsearchPrompt(e.target.value)} type="text" placeholder="Enter product link"
            className="searchbar-input" />
            <button  disabled={searchPrompt ===''} type="submit" className="searchbar-btn">{isLoading ?'Searching...':'Search'}</button>
        </form>
    )
}

export default Searchbar
