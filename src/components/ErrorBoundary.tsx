import React, { ReactNode, ErrorInfo } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryClassProps extends ErrorBoundaryProps {
  errorMessage: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundaryClass extends React.Component<ErrorBoundaryClassProps, ErrorBoundaryState> {
    state: ErrorBoundaryState = { hasError: false };

    static getDerivedStateFromError(_error: Error): ErrorBoundaryState {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log("Error caught by ErrorBoundary:", error, info);
    }

    render() {
        if (this.state.hasError) {
            
            return <h1>{this.props.errorMessage}</h1>;

        }

        return this.props.children; 
    }
}

// Wrapper component that provides location and translation to class component
function LocationAwareErrorBoundary({ children }: ErrorBoundaryProps) {
  const location = useLocation();
  const { t } = useTranslation();
  
  return (
    <ErrorBoundaryClass key={location.pathname} errorMessage={t("error.general")}>
      {children}
    </ErrorBoundaryClass>
  );
}

export default LocationAwareErrorBoundary;