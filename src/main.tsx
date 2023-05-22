import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {root} from "@/router/router.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {RouterProvider} from "react-router-dom";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false}/>
            <RouterProvider router={root}/>
        </QueryClientProvider>
    </React.StrictMode>
)
