import React, { useState, useRef } from 'react';
import { Upload, File, X, CheckCircle2 } from 'lucide-react';

/**
 * FileUploader - Drag and drop file upload component.
 * 
 * @param {string} label - Upload field label
 * @param {string} accept - File types to accept
 * @param {function} onFileSelect - Callback when file is selected
 */
const FileUploader = ({ label, accept = "image/*,.pdf", onFileSelect }) => {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      if (onFileSelect) onFileSelect(droppedFile);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      if (onFileSelect) onFileSelect(selectedFile);
    }
  };

  const removeFile = (e) => {
    e.stopPropagation();
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="space-y-2 w-full">
      {label && (
        <label className="text-[11px] font-bold uppercase text-text-muted tracking-[0.08em] ml-1">
          {label}
        </label>
      )}
      
      <div 
        onClick={() => fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          relative border-2 border-dashed rounded-card p-8 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-200
          ${isDragging ? 'border-trust-teal bg-trust-teal/5' : 'border-border-main bg-input-bg/50 hover:border-text-faint hover:bg-input-bg'}
          ${file ? 'border-trust-teal/50 bg-trust-teal/5' : ''}
        `}
      >
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={handleFileChange}
          accept={accept}
          className="hidden" 
        />

        {!file ? (
          <>
            <div className="w-12 h-12 rounded-full bg-border-main/20 flex items-center justify-center text-text-muted">
              <Upload size={24} />
            </div>
            <div className="text-center">
              <p className="text-[13px] font-bold text-text-secondary">Click or drag file to upload</p>
              <p className="text-[11px] text-text-ghost mt-1">PDF, PNG, JPG (Max 5MB)</p>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-4 w-full">
            <div className="w-10 h-10 rounded-radius-input bg-trust-teal/20 flex items-center justify-center text-trust-teal">
              <File size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-bold text-text-primary truncate">{file.name}</p>
              <p className="text-[11px] text-trust-teal font-bold uppercase tracking-wider flex items-center gap-1">
                <CheckCircle2 size={10} /> Ready to upload
              </p>
            </div>
            <button 
              onClick={removeFile}
              className="p-2 text-text-muted hover:text-trust-red transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
