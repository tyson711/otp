import { useState, useEffect } from 'react'
function OTP({ isWebAPI = false }) {
    const [code, setCode] = useState()
    useEffect(() => {
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
                navigator.credentials
                    .get({
                        otp: { transport: ['sms'] },
                        signal: ac.signal
                    })
                    .then(otp => {
                        setCode(otp.code)
                        alert('SMS Code:', otp.code)
                        if (form) form.submit()
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
        }
    }, [isWebAPI])
    return <input type="text" autoComplete="one-time-code" inputMode="numeric" value={code} />
}
export default OTP