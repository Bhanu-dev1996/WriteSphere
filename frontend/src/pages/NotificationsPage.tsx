import { Helmet } from "react-helmet-async";

export function NotificationsPage() {
  return (
    <>
      <Helmet>
        <title>Notifications — WriteSphere</title>
      </Helmet>
      <h2 className="font-serif text-2xl text-foreground mb-6">Notifications</h2>
      <p className="text-muted-foreground">Your notifications — coming soon</p>
    </>
  );
}
