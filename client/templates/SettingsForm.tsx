import React, { useState } from 'react';
import {
  Box,
  Typography,
  Stack,
  Divider,
  Grid,
  Avatar as MuiAvatar,
  IconButton
} from '@mui/material';
import {
  PhotoCamera,
  Notifications,
  Security,
  Palette,
  Language,
  Delete
} from '@mui/icons-material';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Switch from '../components/ui/Switch';
import Radio from '../components/ui/Radio';
import Select from '../components/ui/Select';
import Alert from '../components/ui/Alert';
import Tabs from '../components/ui/Tabs';

interface SettingsFormProps {
  showDemo?: boolean;
  onSave?: (settings: any) => void;
}

export const SettingsForm: React.FC<SettingsFormProps> = ({
  showDemo = true,
  onSave
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [settings, setSettings] = useState({
    // Profile
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Product designer with a passion for creating delightful user experiences.',
    
    // Notifications
    emailNotifications: true,
    pushNotifications: false,
    marketingEmails: true,
    securityAlerts: true,
    weeklyDigest: false,
    
    // Privacy & Security
    profileVisibility: 'public',
    twoFactorAuth: false,
    dataCollection: true,
    activityTracking: false,
    
    // Preferences
    theme: 'light',
    language: 'en',
    timezone: 'America/New_York',
    dateFormat: 'MM/DD/YYYY',
    
    // Account
    accountType: 'premium'
  });
  
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const handleInputChange = (field: string) => (event: any) => {
    const value = event.target?.type === 'checkbox' 
      ? event.target.checked 
      : event.target?.value || event;
    
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveMessage('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (onSave) {
        onSave(settings);
      }
      
      setSaveMessage('Settings saved successfully!');
    } catch (error) {
      setSaveMessage('Failed to save settings. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteAccount = () => {
    setSaveMessage('Account deletion not implemented in demo');
  };

  const tabsData = [
    { label: 'Profile', icon: <PhotoCamera /> },
    { label: 'Notifications', icon: <Notifications /> },
    { label: 'Privacy & Security', icon: <Security /> },
    { label: 'Preferences', icon: <Palette /> },
    { label: 'Account', icon: <Language /> }
  ];

  const renderProfileTab = () => (
    <Stack spacing={4}>
      {/* Avatar Section */}
      <Box>
        <Typography variant="h6" gutterBottom>
          Profile Picture
        </Typography>
        <Stack direction="row" spacing={3} alignItems="center">
          <Box sx={{ position: 'relative' }}>
            <MuiAvatar sx={{ width: 80, height: 80 }}>
              {settings.firstName[0]}{settings.lastName[0]}
            </MuiAvatar>
            <IconButton
              sx={{
                position: 'absolute',
                bottom: -8,
                right: -8,
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': { bgcolor: 'primary.dark' }
              }}
              size="small"
            >
              <PhotoCamera fontSize="small" />
            </IconButton>
          </Box>
          <Stack spacing={1}>
            <Button variant="outlined" size="small">
              Upload New Photo
            </Button>
            <Button variant="text" size="small" color="error">
              Remove Photo
            </Button>
          </Stack>
        </Stack>
      </Box>

      {/* Personal Information */}
      <Box>
        <Typography variant="h6" gutterBottom>
          Personal Information
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Input
              label="First Name"
              value={settings.firstName}
              onChange={handleInputChange('firstName')}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              label="Last Name"
              value={settings.lastName}
              onChange={handleInputChange('lastName')}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Email Address"
              type="email"
              value={settings.email}
              onChange={handleInputChange('email')}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Phone Number"
              value={settings.phone}
              onChange={handleInputChange('phone')}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Bio"
              multiline
              rows={3}
              value={settings.bio}
              onChange={handleInputChange('bio')}
              fullWidth
              helperText="Tell us a bit about yourself"
            />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );

  const renderNotificationsTab = () => (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Email Notifications
        </Typography>
        <Stack spacing={2}>
          <Switch
            label="General notifications"
            helperText="Receive emails about account activity"
            checked={settings.emailNotifications}
            onChange={handleInputChange('emailNotifications')}
          />
          <Switch
            label="Marketing emails"
            helperText="Receive promotional emails and updates"
            checked={settings.marketingEmails}
            onChange={handleInputChange('marketingEmails')}
          />
          <Switch
            label="Security alerts"
            helperText="Get notified about security events"
            checked={settings.securityAlerts}
            onChange={handleInputChange('securityAlerts')}
          />
          <Switch
            label="Weekly digest"
            helperText="Summary of your weekly activity"
            checked={settings.weeklyDigest}
            onChange={handleInputChange('weeklyDigest')}
          />
        </Stack>
      </Box>

      <Divider />

      <Box>
        <Typography variant="h6" gutterBottom>
          Push Notifications
        </Typography>
        <Switch
          label="Browser notifications"
          helperText="Show notifications in your browser"
          checked={settings.pushNotifications}
          onChange={handleInputChange('pushNotifications')}
        />
      </Box>
    </Stack>
  );

  const renderPrivacyTab = () => (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Profile Visibility
        </Typography>
        <Radio
          value={settings.profileVisibility}
          onChange={handleInputChange('profileVisibility')}
          options={[
            { value: 'public', label: 'Public', helperText: 'Anyone can see your profile' },
            { value: 'private', label: 'Private', helperText: 'Only you can see your profile' },
            { value: 'friends', label: 'Friends Only', helperText: 'Only your connections can see your profile' }
          ]}
        />
      </Box>

      <Divider />

      <Box>
        <Typography variant="h6" gutterBottom>
          Security Settings
        </Typography>
        <Stack spacing={2}>
          <Switch
            label="Two-factor authentication"
            helperText="Add an extra layer of security to your account"
            checked={settings.twoFactorAuth}
            onChange={handleInputChange('twoFactorAuth')}
          />
        </Stack>
      </Box>

      <Divider />

      <Box>
        <Typography variant="h6" gutterBottom>
          Data & Privacy
        </Typography>
        <Stack spacing={2}>
          <Switch
            label="Data collection"
            helperText="Allow us to collect usage data to improve our service"
            checked={settings.dataCollection}
            onChange={handleInputChange('dataCollection')}
          />
          <Switch
            label="Activity tracking"
            helperText="Track your activity for personalized recommendations"
            checked={settings.activityTracking}
            onChange={handleInputChange('activityTracking')}
          />
        </Stack>
      </Box>
    </Stack>
  );

  const renderPreferencesTab = () => (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Appearance
        </Typography>
        <Radio
          label="Theme"
          value={settings.theme}
          onChange={handleInputChange('theme')}
          options={[
            { value: 'light', label: 'Light Mode' },
            { value: 'dark', label: 'Dark Mode' },
            { value: 'auto', label: 'Auto (System)' }
          ]}
        />
      </Box>

      <Divider />

      <Box>
        <Typography variant="h6" gutterBottom>
          Localization
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Select
              label="Language"
              value={settings.language}
              onChange={handleInputChange('language')}
              options={[
                { value: 'en', label: 'English' },
                { value: 'es', label: 'Spanish' },
                { value: 'fr', label: 'French' },
                { value: 'de', label: 'German' }
              ]}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Select
              label="Timezone"
              value={settings.timezone}
              onChange={handleInputChange('timezone')}
              options={[
                { value: 'America/New_York', label: 'Eastern Time' },
                { value: 'America/Chicago', label: 'Central Time' },
                { value: 'America/Denver', label: 'Mountain Time' },
                { value: 'America/Los_Angeles', label: 'Pacific Time' }
              ]}
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );

  const renderAccountTab = () => (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Account Type
        </Typography>
        <Card variant="outlined" sx={{ p: 3 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant="subtitle1" fontWeight="medium">
                Premium Plan
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Unlimited access to all features
              </Typography>
            </Box>
            <Button variant="outlined" size="small">
              Manage Plan
            </Button>
          </Stack>
        </Card>
      </Box>

      <Divider />

      <Box>
        <Typography variant="h6" gutterBottom color="error">
          Danger Zone
        </Typography>
        <Card variant="outlined" sx={{ p: 3, borderColor: 'error.main' }}>
          <Stack spacing={2}>
            <Box>
              <Typography variant="subtitle1" fontWeight="medium">
                Delete Account
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Permanently delete your account and all associated data. This action cannot be undone.
              </Typography>
            </Box>
            <Button
              variant="error"
              size="small"
              startIcon={<Delete />}
              onClick={handleDeleteAccount}
              sx={{ alignSelf: 'flex-start' }}
            >
              Delete Account
            </Button>
          </Stack>
        </Card>
      </Box>
    </Stack>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 0: return renderProfileTab();
      case 1: return renderNotificationsTab();
      case 2: return renderPrivacyTab();
      case 3: return renderPreferencesTab();
      case 4: return renderAccountTab();
      default: return null;
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.50', p: 3 }}>
      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Settings
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Manage your account settings and preferences
        </Typography>

        {saveMessage && (
          <Alert
            severity={saveMessage.includes('successfully') ? 'success' : 'error'}
            sx={{ mb: 3 }}
            onClose={() => setSaveMessage('')}
          >
            {saveMessage}
          </Alert>
        )}

        <Card variant="contained">
          <Tabs
            value={activeTab}
            onChange={(_, newValue) => setActiveTab(newValue)}
            tabs={tabsData}
            variant="vertical"
            sx={{ '& .MuiTabs-root': { borderRight: 1, borderColor: 'divider' } }}
          />
          
          <Box sx={{ p: 4 }}>
            {renderTabContent()}
            
            <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
              <Button
                variant="gradient"
                onClick={handleSave}
                loading={isSaving}
              >
                Save Changes
              </Button>
              <Button variant="outlined">
                Cancel
              </Button>
            </Stack>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default SettingsForm;
