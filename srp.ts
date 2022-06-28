// NOT violating SRP
//Single Responsibility Principle – SRP
class User {
    login(email: string, password: string) {}
  
    signup(email: string, password: string) {}
  
    assignRole(role: any) {}
  }
  
  // Violating SRP
  class ReportDocument {
    generateReport(data: any) {}
  
    createPDF(report: any) {}
  }