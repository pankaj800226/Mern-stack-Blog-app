
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-b81ooqpawvrk8kua.us.auth0.com"
    clientId="auQTYBuUfcDLR5Go0GheQgkTWL8ShYl6"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>

)
