"use client";

import { 
  Home as HomeIcon, 
  Users, 
  Building2,
  FolderKanban,
  IdCardLanyard,
  Handshake,
  Briefcase,
  User,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarInset,
} from "../../components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Dados",
      url: "/admin/dashboard",
      icon: HomeIcon,
      isActive: true,
    },
    {
      title: "Demandas",
      url: "#",
      icon: FolderKanban,
    },
    {
      title: "Add Colaborador",
      url: "#",
      icon: Handshake,
    },
    {
      title: "Add Operador",
      url: "#",
      icon: IdCardLanyard,
    },
    {
      title: "Add Empresas Terceiras",
      url: "#",
      icon: Building2,
    },
    {
      title: "Add Tipo Demanda",
      url: "#",
      icon: Briefcase,
    }
  ]
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar variant="inset">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {data.navMain.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      isActive={item.isActive}  
                    >
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      
      </Sidebar>
      
      <SidebarInset>
        <div className="flex flex-1 flex-col p-4">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

