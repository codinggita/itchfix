import React from 'react';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';
import Button from '../ui/Button';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-trust-red/10 flex items-center justify-center text-trust-red">
            <AlertCircle size={40} />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-display font-bold text-text-primary">Something went wrong</h2>
            <p className="text-text-muted max-w-md mx-auto">
              We encountered an unexpected error while rendering this page. Our team has been notified.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              onClick={() => window.location.reload()}
              className="border-border-main"
            >
              <RefreshCw size={16} className="mr-2" /> Reload Page
            </Button>
            <Button 
              variant="primary" 
              onClick={() => window.location.href = '/dashboard'}
            >
              <Home size={16} className="mr-2" /> Go Dashboard
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
