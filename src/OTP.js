import { useState, useEffect } from 'react'
function OTP({ isWebAPI = false }) {
    const [code, setCode] = useState()
    useEffect(() => {
        alert("OTPCredential' in window'", 'OTPCredential' in window)
        if (isWebAPI && 'OTPCredential' in window) {
            window.addEventListener('DOMContentLoaded', e => {
                const input = document.querySelector('input[autocomplete="one-time-code"]')
                if (!input) return
                const ac = new AbortController()
                const form = input.closest('form')
                if (form) {
                    form.addEventListener('submit', e => {
                        ac.abort()
                    })
                }
                alert('navigator.credentials:', navigator.credentials)
                navigator.credentials
                    .get({
                        otp: { transport: ['sms'] },
                        signal: ac.signal
                    })
                    .then(otp => {
                        setCode(otp.code)
                        alert('SMS Code:', otp, otp.code)
                        if (form) form.submit()
                    })
                    .catch(err => {
                        alert('cache err:', err)
                        console.log(err)
                    })
            })
        }
    }, [isWebAPI])
    return <div>
        <h1>{isWebAPI ? "isWebAPI" : "NOT WebAPI"}</h1>
        <input type="text" autoComplete="one-time-code" inputMode="numeric" value={code} />
        <div onClick={() => {
            alert('navigator.credentials: ', navigator.credentials)
            console.log('navigator.credentials: ', navigator.credentials)
        }}>TEST credentials</div>
    </div>
}
export default OTP
