import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Users, Briefcase, AlertCircle, DollarSign, Globe, Server, Shield } from 'lucide-react'

export default function SuperuserDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Superuser Dashboard</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+7% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
                <p className="text-xs text-muted-foreground">Across all departments</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">System Health</CardTitle>
                <Server className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">99.9%</div>
                <Progress value={99.9} className="mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1.45M</div>
                <p className="text-xs text-muted-foreground">+12% from last quarter</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Global User Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center">
                  <Globe className="h-32 w-32 text-muted-foreground" />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {[
                    { region: "North America", users: 450 },
                    { region: "Europe", users: 320 },
                    { region: "Asia", users: 280 },
                    { region: "Others", users: 184 },
                  ].map((item) => (
                    <div key={item.region}>
                      <p className="font-medium">{item.region}</p>
                      <p className="text-muted-foreground">{item.users} users</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent System Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    { message: "Database backup completed", type: "success" },
                    { message: "New user registration spike detected", type: "warning" },
                    { message: "System update scheduled for next week", type: "info" },
                    { message: "Unusual login attempt blocked", type: "error" },
                  ].map((alert, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <AlertCircle className={`h-4 w-4 ${
                        alert.type === 'success' ? 'text-green-500' :
                        alert.type === 'warning' ? 'text-yellow-500' :
                        alert.type === 'error' ? 'text-red-500' : 'text-blue-500'
                      }`} />
                      <span>{alert.message}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="departments">
          <Card>
            <CardHeader>
              <CardTitle>Department Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  { name: "Engineering", employees: 150, projects: 12, performance: 92 },
                  { name: "Marketing", employees: 45, projects: 8, performance: 88 },
                  { name: "Sales", employees: 75, projects: 5, performance: 95 },
                  { name: "Human Resources", employees: 20, projects: 3, performance: 90 },
                ].map((dept, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{dept.name}</p>
                      <p className="text-sm text-muted-foreground">{dept.employees} employees, {dept.projects} projects</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{dept.performance}%</p>
                      <Progress value={dept.performance} className="w-20" />
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>System Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    { name: "CPU Usage", value: 45 },
                    { name: "Memory Usage", value: 60 },
                    { name: "Disk Space", value: 75 },
                    { name: "Network Bandwidth", value: 30 },
                  ].map((resource, index) => (
                    <li key={index} className="space-y-1">
                      <div className="flex justify-between">
                        <span>{resource.name}</span>
                        <span>{resource.value}%</span>
                      </div>
                      <Progress value={resource.value} />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Security Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Threat Level</span>
                    <span className="font-medium text-green-500">Low</span>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Recent Security Events</p>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Firewall rules updated",
                        "3 failed login attempts blocked",
                        "Security patches applied to all servers",
                        "Data encryption protocols reviewed",
                      ].map((event, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Shield className="h-4 w-4 text-muted-foreground" />
                          <span>{event}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-6">
        <Button>Generate Comprehensive Report</Button>
      </div>
    </div>
  )
}