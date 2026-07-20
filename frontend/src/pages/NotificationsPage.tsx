import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Heart, UserPlus, MessageCircle } from "lucide-react";

const notifications = [
  { text: "Marcus Chen liked your post", time: "2 hours ago", icon: Heart },
  { text: "Sarah Kim started following you", time: "1 day ago", icon: UserPlus },
  { text: "New comment on your post", time: "3 days ago", icon: MessageCircle },
];

export function NotificationsPage() {
  return (
    <>
      <Helmet>
        <title>Notifications — WriteSphere</title>
      </Helmet>

      <h2 className="font-serif text-2xl text-foreground mb-6">Notifications</h2>

      {notifications.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center py-12 text-muted-foreground">
            <Bell className="size-8 mb-2" />
            <p className="text-sm">No notifications yet</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-2">
          {notifications.map((notif, i) => (
            <Card key={i}>
              <CardContent className="flex items-center gap-3 py-4">
                <notif.icon className="size-4 text-primary shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">{notif.text}</p>
                  <p className="text-xs text-muted-foreground">{notif.time}</p>
                </div>
                <Badge variant="outline" className="shrink-0">New</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
