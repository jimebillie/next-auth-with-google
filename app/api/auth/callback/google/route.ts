import {NextRequest, NextResponse} from "next/server";
import jwt from "jsonwebtoken" //-> npm i jsonwebtoken, npm i @types/jsonwebtoken
export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const code: any = searchParams.get("code");
    if (code == null) {
        return NextResponse.redirect(new URL("/", req.url))
    } else {
        try {
            /**
             * FormData
             */

            const c_id : any = process.env.GOOGLE_CLIENT_ID;
            const c_secret : any = process.env.GOOGLE_CLIENT_SECRET;

            const formData = new FormData();
            formData.append("code", code);
            formData.append("client_id", c_id ); 
            formData.append("client_secret", c_secret);
            formData.append("redirect_uri", "http://localhost:3000/api/auth/callback/google"); //-> Do drynamic url if prod : https://propermu.com/api/auth/callback/google
            formData.append("grant_type", "authorization_code");
            
            /**
             * Call api
             */
            const api: any = await fetch("https://oauth2.googleapis.com/token", {method: "POST", body: formData});
            const resp: any = await api.json(); //-> Get json response
            /**
             * Check Error
             */
            if (resp?.error) {
                console.log("Error#2->google_login")
                return NextResponse.redirect(new URL("/", req.url));
            } else {
                const decodeJWT: any = jwt.decode(resp.id_tokens);
                //-> Success, work next under comment
            }
        } catch (err) {
            console.log("Error#1->goole_login");
        }
    }
    return NextResponse.json({})
}












