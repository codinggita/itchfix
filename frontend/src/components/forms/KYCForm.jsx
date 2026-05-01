import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, User, FileText, CheckCircle2, ArrowRight, ArrowLeft, Upload } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import FileUploader from '../ui/FileUpload';
import StepIndicator from '../ui/StepIndicator';

const KYCForm = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const steps = ['Business Details', 'Personal Info', 'Documents', 'Review'];

  const [formData, setFormData] = useState({
    businessName: '',
    gstNumber: '',
    panNumber: '',
    ownerName: '',
    email: '',
    phone: '',
    documents: {
      gst: null,
      pan: null,
      aadhaar: null
    }
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <Input 
                label="Legal Business Name" 
                placeholder="e.g. Reliance Textiles Pvt Ltd"
                icon={<Building2 size={16} />}
                value={formData.businessName}
                onChange={(e) => setFormData({...formData, businessName: e.target.value})}
              />
              <Input 
                label="GSTIN Number" 
                placeholder="22AAAAA0000A1Z5"
                icon={<FileText size={16} />}
                value={formData.gstNumber}
                onChange={(e) => setFormData({...formData, gstNumber: e.target.value})}
              />
              <Input 
                label="Business PAN" 
                placeholder="ABCDE1234F"
                icon={<FileText size={16} />}
                value={formData.panNumber}
                onChange={(e) => setFormData({...formData, panNumber: e.target.value})}
              />
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <Input 
                label="Authorized Representative Name" 
                placeholder="Rahul Shah"
                icon={<User size={16} />}
                value={formData.ownerName}
                onChange={(e) => setFormData({...formData, ownerName: e.target.value})}
              />
              <Input 
                label="Official Email Address" 
                placeholder="rahul@business.com"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <Input 
                label="Mobile Number" 
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FileUploader label="GST Certificate" onFileSelect={(file) => setFormData({...formData, documents: {...formData.documents, gst: file}})} />
              <FileUploader label="Business PAN Card" onFileSelect={(file) => setFormData({...formData, documents: {...formData.documents, pan: file}})} />
              <FileUploader label="Aadhaar Card (Front & Back)" onFileSelect={(file) => setFormData({...formData, documents: {...formData.documents, aadhaar: file}})} />
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8 text-center py-4"
          >
            <div className="w-20 h-20 bg-trust-teal/10 rounded-full flex items-center justify-center mx-auto text-trust-teal">
              <CheckCircle2 size={40} />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-display text-text-primary">Ready for Submission</h3>
              <p className="text-text-muted text-sm max-w-sm mx-auto">
                Please review all information before submitting. Once submitted, our compliance team will verify your details within 24 hours.
              </p>
            </div>
            <div className="bg-page-bg/50 border border-border-main rounded-xl p-6 text-left space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-text-ghost text-[10px] uppercase font-bold tracking-widest">Business</p>
                  <p className="font-bold text-text-secondary">{formData.businessName || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-text-ghost text-[10px] uppercase font-bold tracking-widest">GSTIN</p>
                  <p className="font-mono font-bold text-text-secondary">{formData.gstNumber || 'N/A'}</p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12">
      <StepIndicator currentStep={step} steps={steps} />

      <div className="bg-card-bg border border-border-main rounded-card p-8 min-h-[450px] flex flex-col justify-between shadow-2xl shadow-trust-teal/5">
        <div className="flex-1">
          <div className="mb-8">
            <h2 className="text-xl font-bold font-display text-text-primary uppercase tracking-widest">{steps[step-1]}</h2>
            <div className="h-1 w-12 bg-trust-teal mt-2 rounded-full" />
          </div>
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between mt-12 pt-8 border-t border-border-main">
          <Button 
            variant="ghost" 
            onClick={prevStep} 
            disabled={step === 1}
            className={step === 1 ? 'invisible' : ''}
          >
            <ArrowLeft size={16} className="mr-2" /> Previous Step
          </Button>
          
          {step < 4 ? (
            <Button variant="primary" onClick={nextStep} className="px-10">
              Next Step <ArrowRight size={16} className="ml-2" />
            </Button>
          ) : (
            <Button variant="primary" onClick={onComplete} className="px-10">
              Submit Verification <CheckCircle2 size={16} className="ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default KYCForm;
