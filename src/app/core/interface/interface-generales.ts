export interface InterfaceDrivers {
  ID:Number;
  LAST_NAME:String;
  FIRST_NAME:String;
  SSD:String;
  DOB:String;
  ADDRESS:String;
  CITY:String;
  ZIP:String;
  PHONE:String;
  ACTIVE:Boolean;
}
export interface InterfaceVehicles{
  ID:Number;
  DESCRIPTION:String;
  YEAR:Number;
  MAKE:Number;
  CAPACITY:Number;
  ACTIVE:Boolean;
}

export interface InterfaceRoutes{
  ID:Number;
  DESCRIPTION:String;
  DRIVER:String;
  VEHICLE:String;
  ACTIVE:Boolean;
}

