import { Component } from '@angular/core';
import { TempDataService } from '../Serveices/temp-data.service';
declare var Razorpay: any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  oid!:string
constructor(private pay:TempDataService){
}
paypaisa(amt:number){
  this.pay.createOrder(amt,'INR','demo').subscribe({
    next:(value)=>{
      this.oid=value.orderId
      console.log(this.oid);
      this.makePayment()
    },
    error(err) {
      console.log(err);
    },
  })
}
  makePayment(): void {
    const options: any = {
      key: 'rzp_test_3yldLqNiLmkx0c', 
      amount: 10000, // Amount in paise (e.g., 10000 paise = INR 100)
      name: 'Your Company Name',
      description: 'Test payment',
      image: 'assets/logo.png', 
      currency: 'INR',
      order_id:this.oid, 
      handler: (response: any) => {
        // This function will handle the success response
        console.log(response);
        // You can handle further actions here, e.g., updating the order status on your server.
      },
      prefill: {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '9999999999'
      },
      theme: {
        color: '#F37254'
      }
    };
    const rzp = new Razorpay(options);
    rzp.open();
  }

}


  