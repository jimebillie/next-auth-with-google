import React from "react";

export default function Home() {
    return (
        <>
            <div className="flex justify-center flex-col items-center mt-[50px]">
                <h1 className="text-2xl font-semibold">
                    Mini Project
                </h1>
                <h2 className="">
                    login with google
                    {/* 
                    * ref : https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow?hl=th
                    * callback : /api/auth/callback/google
                    */}
                    <span className='ml-2 underline text-blue-500'>
                        <a href="https://accounts.google.com/o/oauth2/auth?response_type=code&redirect_uri=http://localhost:3000/api/auth/callback/google&client_id=732508043910-hjqvcc136rol5djfovducc0alcj440l5.apps.googleusercontent.com&scope=email+profile">Click</a>
                    </span>
                </h2>

            </div>
        </>
    );
}
