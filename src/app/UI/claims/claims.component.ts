import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFileUploadModule }  from 'angular-material-fileupload';
import { SharedServiceService } from 'src/app/shared-service.service';
import { MatStepper } from '@angular/material';
import { Claims } from '../../model/claims';

export interface State {
  value: string;
  viewValue: string;
}

export interface MakeModel {
  value: string;
  viewValue: string;
} 
@NgModule({
  imports: [FormGroup,MatFileUploadModule],

  exports: []
})
@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
})

export class ClaimsComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
 
  public claimNumber:string;
  public  MakeModel: string;
  public  ClaimTitle: string;
  public   PolicyNumber: string;
  public  InsuredName: string;
  public  DateOfEvent: string;
  public   DateReceieved: string;
  public producercode: string;
  public  EventLocation: string;
  public  PhoneNumber: string;
  public  InsuranceCompany: string;
  public  NumberOfvehicle: string;
  public  EventInfo: string;
  public SupportingDoc:string;
  files: FileList; 
 
   insertResult: Claims;
   ViewClaimDetails:Claims;
  public IsClaimSubmitted :boolean=false;
public IsDispalyclaim:boolean=false;
  constructor(private _formBuilder: FormBuilder,private _service:SharedServiceService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      ClaimTitelCtrl: ['', Validators.required],
      InsuredNameCtrl: ['', Validators.required],
      policyNumberCtrl:['', Validators.required],
      producerCodeCtrl: ['', Validators.required],
      PhoneNumberCtrl: ['', Validators.required],
      InsuredCompanyCtrl: ['', Validators.required]

    });
    this.secondFormGroup = this._formBuilder.group({
      DateofeventCtrl: ['', Validators.required],
      accidentstateCtrl: ['', Validators.required],
      CarModelCtrl: ['', Validators.required],
      numberofcarsCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      DescribeAccidentCtrl: ['', Validators.required]

    });
  }
  States: State[] = [
    { value: 'NJ', viewValue: 'New Jersy' },
    { value: 'TX', viewValue: 'Texsas' },
    { value: 'PA', viewValue: 'Pheladelphia' },
    { value: 'NY', viewValue: 'New york' },
  ];

  MakeModels: MakeModel[] = [
    { value: 'Volvo', viewValue: 'Volvo' },
    { value: 'Saab', viewValue: 'Saab' },
    { value: 'Mercedes', viewValue: 'Mercedes' },
    { value: 'Audi', viewValue: 'Audi' }

  ];
  CreateClaim(stepperform:MatStepper):void
  {
    let  claimdetails:Claims={
      claimNumber:"",
     MakeModel: this.MakeModel,
    ClaimTitle: this.ClaimTitle,
    PolicyNumber: this.PolicyNumber,
    InsuredName: this.InsuredName,
    DateOfEvent: this.DateOfEvent,
    DateReceieved: this.DateOfEvent,
    producercode: this.producercode,
    EventLocation: this.EventLocation,
    PhoneNumber: this.PhoneNumber,
    InsuranceCompany: this.InsuranceCompany,
    NumberOfvehicle: this.NumberOfvehicle,
    EventInfo: this.EventInfo,
    SupportingDoc:this.SupportingDoc
    };
  
    this._service.createclaims(claimdetails).subscribe(data=>this.insertResult=data);
    console.log(this.insertResult);
     this.IsClaimSubmitted= true;
     this.IsDispalyclaim=false;
    this.resetStepper(stepperform);
    
  }
  resetStepper(stepper: MatStepper){
    stepper.reset();
 }
 GetClaimDetails(claimid:string)
 {
  
  this._service.getClaim(claimid).subscribe(data=>this.ViewClaimDetails=data);
  this.IsDispalyclaim=true;
 }
 
 fileEvent(event){
  this.files = event.target.files; 
  var reader = new FileReader(); 
  reader.onload = this._handleReaderLoaded.bind(this); 
  reader.readAsBinaryString(this.files[0]); 
}

_handleReaderLoaded(readerEvt) { 
  var binaryString = readerEvt.target.result; 
  this.SupportingDoc = btoa(binaryString);  // Converting binary string data. 
} 
 
}
