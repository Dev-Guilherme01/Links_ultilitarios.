export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  url: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  color: string;
  lightColor: string;
  icon: string;
  services: ServiceItem[];
}
