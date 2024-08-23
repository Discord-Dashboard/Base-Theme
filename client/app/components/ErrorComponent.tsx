'use client';

import React from 'react';
import { IHttpErrorCode } from 'throw-http-errors/dist/httpErrors/HttpErrorCodeInterface';

const ErrorComponent: React.FC<{
    error: IHttpErrorCode;
}> = ({ error }) => {
    return (
        <div>
            <p>An error occurred.</p>
            <p>
                <b>{error.code}</b>: {error.message}
            </p>
        </div>
    );
};

export default ErrorComponent;
