import { Button, Stack } from "@mui/material";
import { themes, type AppTheme } from "@/theme/themestore";

function Settings() {
  const applyTheme = (theme: AppTheme) => {
    localStorage.setItem("theme", theme);

    window.location.reload();
  };

  return (
    <div className="rounded bg-white p-6 shadow">
      <h1 className="mb-4 text-3xl font-bold">
        Settings
      </h1>

      <p className="mb-4 text-gray-600">
        Pick your application theme.
      </p>

      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          onClick={() => applyTheme(themes.default)}
        >
          Default
        </Button>

        <Button
          variant="contained"
          onClick={() => applyTheme(themes.blue)}
        >
          Blue
        </Button>

        <Button
          variant="contained"
          color="success"
          onClick={() => applyTheme(themes.green)}
        >
          Green
        </Button>
      </Stack>
    </div>
  );
}

export default Settings;