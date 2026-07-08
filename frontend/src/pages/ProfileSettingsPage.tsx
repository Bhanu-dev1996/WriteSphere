import { Helmet } from "react-helmet-async";

export function ProfileSettingsPage() {
  return (
    <>
      <Helmet>
        <title>Profile — WriteSphere</title>
      </Helmet>
      <h2 className="font-serif text-2xl text-foreground mb-6">Profile Settings</h2>
      <p className="text-muted-foreground">Profile settings — coming soon</p>
    </>
  );
}
