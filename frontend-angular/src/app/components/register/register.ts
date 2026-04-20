import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
import { Rider } from '../../models/rider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  currentStep = signal<number>(1);
  isLoading = signal<boolean>(false);
  isSubmitted = signal<boolean>(false);
  

  registerForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    university: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]],
    
    idFile: [null as File | null, Validators.required],

    bikeType: ['', Validators.required],
    hasBicycle: [false, Validators.requiredTrue] 
  });

  nextStep(): void {
    if (this.currentStep() < 3) {
      this.currentStep.update(s => s + 1);
    }
  }

  prevStep(): void {
    if (this.currentStep() > 1) {
      this.currentStep.update(s => s - 1);
    }
  }

  onFileChange(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      this.registerForm.patchValue({ idFile: fileList[0] });
    }
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.isLoading.set(true);
      
      const riderData: Partial<Rider> = {
        fullName: this.registerForm.value.fullName!,
        university: this.registerForm.value.university!,
        phone: this.registerForm.value.phone!,
        hasBicycle: true,
        status: 'pending'
      };

      this.authService.register(riderData).subscribe({
        next: (res) => {
          this.isSubmitted.set(true);
          this.isLoading.set(false);
          this.authService.saveToken(res.token);
        },
        error: (err) => {
          this.isLoading.set(false);
          console.error('Registration Error', err);
        }
      });
    }
  }





  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.registerForm.patchValue({ idFile: file });
      console.log('Selected file:', file.name);
    }
  }

  canGoNext(): boolean {
    if (this.currentStep() === 1) {
      return !!(this.registerForm.get('fullName')?.valid && 
                this.registerForm.get('university')?.valid && 
                this.registerForm.get('phone')?.valid);
    }
    if (this.currentStep() === 2) {
      return !!this.registerForm.get('idFile')?.value;
    }
    return true;
  }

}
