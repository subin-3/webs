import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import AuthForm from '../Components/AuthForm';
function LoginSignupPage({ setUser }) {
  const [searchParams] = useSearchParams();
  const modeFromUrl = searchParams.get('mode');
  const [mode, setMode] = useState(modeFromUrl === 'signup' ? 'signup' : 'login');

  useEffect(() => {
    if (modeFromUrl === 'signup' || modeFromUrl === 'login') {
      setMode(modeFromUrl);
    }
  }, [modeFromUrl]);

  return (
    <div className="login-signup-page">
      <div
        className="mode-toggle"
        role="tablist"
        aria-label="Authentication mode toggle"
      >
        <button
          onClick={() => setMode('login')}
          className={`toggle-button ${mode === 'login' ? 'active' : ''}`}
          role="tab"
          aria-selected={mode === 'login'}
          aria-controls="login-panel"
          id="login-tab"
          type="button"
          tabIndex={mode === 'login' ? 0 : -1}
        >
          Login
        </button>
        <button
          onClick={() => setMode('signup')}
          className={`toggle-button ${mode === 'signup' ? 'active' : ''}`}
          role="tab"
          aria-selected={mode === 'signup'}
          aria-controls="signup-panel"
          id="signup-tab"
          type="button"
          tabIndex={mode === 'signup' ? 0 : -1}
        >
          Signup
        </button>
      </div>

      {/* Pass setUser to AuthForm so it can update user on login/signup */}
      <AuthForm mode={mode} setUser={setUser} />
    </div>
  );
}

export default SignupPage;
