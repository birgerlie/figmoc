import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ConfigToolMockup() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">SynergySky Config Portal (Figmoc)</h1>

      <Tabs defaultValue="dashboard" className="space-y-4">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="setup">Setup Wizard</TabsTrigger>
          <TabsTrigger value="config">Configuration</TabsTrigger>
          <TabsTrigger value="rooms">Room Overview</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
          <TabsTrigger value="admin">Admin</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">System Overview</h2>
              <p>Microsoft Graph: Connected</p>
              <p>Webex API: Not Connected</p>
              <p>Rooms Configured: 4 / 10</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="setup">
          <Card>
            <CardContent className="space-y-4">
              <h2 className="text-xl font-semibold">Setup Wizard</h2>
              <div>
                <Label>Connect Microsoft 365</Label>
                <Button className="ml-2">Connect</Button>
              </div>
              <div>
                <Label>Connect Webex API</Label>
                <Button className="ml-2">Connect</Button>
              </div>
              <div>
                <Label>Discover Rooms</Label>
                <Button className="ml-2">Run Discovery</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="config">
          <Card>
            <CardContent className="space-y-4">
              <h2 className="text-xl font-semibold">Configuration</h2>
              <div>
                <Label>Enable OBTP</Label>
                <Button className="ml-2">Configure</Button>
              </div>
              <div>
                <Label>Enable Connect GO</Label>
                <Button className="ml-2">Configure</Button>
              </div>
              <div>
                <Label>Enable Lobby Auto Admit</Label>
                <Button className="ml-2">Configure</Button>
              </div>
              <div>
                <Label>Enable Join by ID</Label>
                <Button className="ml-2">Configure</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rooms">
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-4">Room Overview</h2>
              <p>Room 1: OBTP ✅, Connect GO ✅</p>
              <p>Room 2: OBTP ❌, Connect GO ✅</p>
              <p>Room 3: OBTP ✅, Lobby Auto Admit ✅</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logs">
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Logs & Monitoring</h2>
              <p>[10:24] Graph connected successfully.</p>
              <p>[10:25] Webex connection failed: Invalid credentials.</p>
              <p>[10:30] OBTP configured for Room 1.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="admin">
          <Card>
            <CardContent className="space-y-4">
              <h2 className="text-xl font-semibold">Admin Settings</h2>
              <div>
                <Label>Tenant ID</Label>
                <Input placeholder="Enter Tenant ID" />
              </div>
              <div>
                <Label>Webex Credentials</Label>
                <Input placeholder="Enter API Key" />
              </div>
              <Button>Save</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}