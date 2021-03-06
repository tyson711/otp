import { useState, useEffect } from 'react'
function OTP({ isWebAPI = true }) {
    const [code, setCode] = useState()
    function callCredential(){
        const input = document.querySelector('input[autocomplete="one-time-code"]')
                if (!input) return
                const ac = new AbortController()
                const form = input.closest('form')
                if (form) {
                    form.addEventListener('submit', e => {
                        alert('submit')
                        ac.abort()
                    })
                }
        navigator.credentials
            .get({
                otp: { transport: ['sms'] },
                signal: ac.signal
            })
            .then(otp => {
                // input.value = otp.code
                setCode(otp.code)
                alert('SMS Code:', otp, otp.code)
                if (form) form.submit()
            })
            .catch(err => {
                alert('cache err:', err)
                console.log(err)
            })
    }
    useEffect(() => {
        if (isWebAPI && 'OTPCredential' in window) {
            window.addEventListener('DOMContentLoaded', e => {
                callCredential()                
            })
        }
    }, [isWebAPI])
    return <div>
        <h1>{isWebAPI ? "isWebAPI" : "NOT WebAPI"}</h1>
        <input type="text" autoComplete="one-time-code" inputMode="numeric" value={code} />
        <div onClick={() => {
            callCredential()
        }}>TEST credentials</div>
    </div>
}
export default OTP
