import React, { useState } from 'react';
import {
  Box,
  Typography,
  Stack,
  Link,
  Divider,
  IconButton,
  InputAdornment
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Google,
  GitHub,
  Twitter
} from '@mui/icons-material';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Checkbox from '../components/ui/Checkbox';
import Alert from '../components/ui/Alert';

interface LoginFormProps {
  showDemo?: boolean;
  onLogin?: (email: string, password: string) => void;
  onSignup?: () => void;
  onForgotPassword?: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  showDemo = true,
  onLogin,
  onSignup,
  onForgotPassword
}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
    }));
    
    // Clear errors when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setAlertMessage('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (onLogin) {
        onLogin(formData.email, formData.password);
      } else {
        setAlertMessage('Login successful! Welcome back.');
      }
    } catch (error) {
      setAlertMessage('Login failed. Please check your credentials and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    setAlertMessage(`${provider} login not implemented in demo`);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'grey.50',
        p: 2
      }}
    >
      <Card variant="contained" sx={{ width: '100%', maxWidth: 400 }}>
        <Box sx={{ p: 4 }}>
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Welcome Back
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Sign in to your account to continue
            </Typography>
          </Box>

          {/* Alert */}
          {alertMessage && (
            <Alert
              severity={alertMessage.includes('successful') ? 'success' : 'error'}
              sx={{ mb: 3 }}
              onClose={() => setAlertMessage('')}
            >
              {alertMessage}
            </Alert>
          )}

          {/* Social Login */}
          <Stack spacing={2} sx={{ mb: 3 }}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<Google />}
              onClick={() => handleSocialLogin('Google')}
            >
              Continue with Google
            </Button>
            
            <Stack direction="row" spacing={1}>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<GitHub />}
                onClick={() => handleSocialLogin('GitHub')}
              >
                GitHub
              </Button>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<Twitter />}
                onClick={() => handleSocialLogin('Twitter')}
              >
                Twitter
              </Button>
            </Stack>
          </Stack>

          <Divider sx={{ my: 3 }}>
            <Typography variant="caption" color="text.secondary">
              Or continue with email
            </Typography>
          </Divider>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange('email')}
                error={!!errors.email}
                helperText={errors.email}
                required
                fullWidth
              />

              <Input
                label="Password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange('password')}
                error={!!errors.password}
                helperText={errors.password}
                required
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />

              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Checkbox
                  label="Remember me"
                  checked={formData.rememberMe}
                  onChange={handleInputChange('rememberMe')}
                />
                <Link
                  component="button"
                  type="button"
                  variant="body2"
                  onClick={onForgotPassword || (() => setAlertMessage('Forgot password not implemented in demo'))}
                  sx={{ textDecoration: 'none' }}
                >
                  Forgot password?
                </Link>
              </Stack>

              <Button
                type="submit"
                variant="gradient"
                size="large"
                fullWidth
                loading={isLoading}
              >
                Sign In
              </Button>
            </Stack>
          </form>

          {/* Sign Up Link */}
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Typography variant="body2" color="text.secondary">
              Don't have an account?{' '}
              <Link
                component="button"
                type="button"
                onClick={onSignup || (() => setAlertMessage('Sign up not implemented in demo'))}
                sx={{ textDecoration: 'none', fontWeight: 'medium' }}
              >
                Sign up for free
              </Link>
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default LoginForm;
