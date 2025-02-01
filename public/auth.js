// const username_auth = "mask"
// const password_auth = "maskaa"




// // Function to request authentication
// function authenticate() {
//     // const username = prompt("Enter Username:");
//     // const password = prompt("Enter Password:");

//     // if (!username || !password) {
//     //     alert("Authentication failed: Missing credentials");
//     //     return;
//     // }

//     const headers = new Headers();
//     headers.append("WWW-authenticate", 'Basic realm="Secure Area');

//     // Replace 'your-protected-url' with the actual server URL
//     fetch("http://127.0.0.1:8000/", { method: "GET", headers: headers })
//         .then((response) => {
//             if (response.status === 401) {
//                 alert("Authentication failed: Unauthorized");
//             } else if (response.status === 403) {
//                 alert("Authentication failed: Forbidden");
//             } else {
//                 return response.text();
//             }
//         })
//         .then((data) => {
//             if (data) {
//                 document.body.innerHTML = `<div>${data}</div>`;
//             }
//         })
//         .catch((error) => console.error("Error:", error));
// }

// // Call authentication function on page load
// authenticate();




// // function basicAuth(req) {
// //     const authHeader = req.headers.authorization;

// //     if (!authHeader) {
// //         return {
// //             status: 401,
// //             headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
// //             message: "Authentication required",
// //         };
// //     }

// //     // Decode Base64
// //     const auth = atob(authHeader.split(" ")[1]);
// //     const [user, password] = auth.split(":");

// //     // Check credentials
// //     if (user === username_auth && password === password_auth) {
// //         return {
// //             status: 200,
// //             message: "Authentication successful!",
// //         };
// //     }

// //     return {
// //         status: 403,
// //         message: "Forbidden: Incorrect credentials",
// //     };
// // }

// // // Example usage:
// // const request = {
// //     headers: {
// //         authorization: "Basic " + btoa("mask:mask"), // Simulate a request with correct credentials
// //     },
// // };

// // const response = basicAuth(request);
// // console.log(response);



// // import { type NextRequest, NextResponse } from 'next/server'

// // export const config = {
// //     matcher: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
// // }

// // export default function middleware(req: NextRequest) {
// //     const basicAuth = req.headers.get('authorization')
// //     const url = req.nextUrl

// //     if (basicAuth) {
// //         const authValue = basicAuth.split(' ')[1]
// //         const [user, pwd] = atob(authValue).split(':')

// //         if (user === 'mask' && pwd === 'mask') {
// //             return NextResponse.next()
// //         }
// //     }
// //     url.pathname = '/api/auth'

// //     return NextResponse.rewrite(url)
// // }

// // import { NextResponse } from 'next/server'

// // export async function GET(): Promise<NextResponse> {
// //     const headers = {
// //         'WWW-authenticate': 'Basic realm="Secure Area"',
// //     };
// //     return NextResponse.json({ message: "Authentication required" }, { status: 401, headers })
// // }


// // const express = require("express");
// // const app = express();

// // // Middleware for Basic Authentication
// // const basicAuthMiddleware = (req, res, next) => {
// //     const authHeader = req.headers.authorization;

// //     if (!authHeader) {
// //         res.setHeader("WWW-Authenticate", 'Basic realm="Secure Area"');
// //         return res.status(401).json({ message: "Authentication required" });
// //     }

// //     const auth = Buffer.from(authHeader.split(" ")[1], "base64").toString();
// //     const [user, password] = auth.split(":");

// //     if (user === "mask" && password === "mask") {
// //         return next(); // Authentication successful, proceed to the route
// //     }

// //     res.status(403).json({ message: "Forbidden" });
// // };

// // // Protected route
// // app.get("/secure", basicAuthMiddleware, (req, res) => {
// //     res.json({ message: "Welcome to the protected area!" });
// // });

// // // Default route
// // app.get("/", (req, res) => {
// //     res.json({ message: "Public access. Try accessing /secure" });
// // });

// // const PORT = 3000;
// // app.listen(PORT, () => {
// //     console.log(`Server running at http://localhost:${PORT}`);
// // });
