import { Card } from "@/components/ui/card";
import { Brain, Download, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

const Selection = () => {

  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
    navigate("/signin");
  };

  const downloadDataset = (file: string) => {
    const link = document.createElement("a");
    link.href = `/datasets/${file}`;
    link.download = file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (

    <div className="min-h-screen relative">

      <AnimatedBackground />

      {/* Header */}
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <Brain className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold">HSoMLSDP</h1>
          </div>

          <Button
            variant="outline"
            onClick={handleLogout}
            className="border-border hover:bg-secondary"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>

        </div>
      </header>

      {/* Cards Section */}
      <div className="flex items-center justify-center min-h-[80vh] relative z-10">

        <div className="grid md:grid-cols-2 gap-10">

          {/* NASA Dataset Card */}
          <Card
            onClick={() => navigate("/datasets")}
            className="cursor-pointer p-10 text-center hover:scale-105 transition"
          >

            <Download className="w-16 h-16 mx-auto text-primary mb-4" />

            <h2 className="text-2xl font-bold mb-2">
              NASA MDP Datasets
            </h2>

            <p className="text-muted-foreground">
              Click to view and download NASA MDP datasets
            </p>

          </Card>

          {/* Prediction Card */}
          <Card
            onClick={() => navigate("/dashboard")}
            className="cursor-pointer p-10 text-center hover:scale-105 transition"
          >

            <Brain className="w-16 h-16 mx-auto text-primary mb-4" />

            <h2 className="text-2xl font-bold mb-2">
              HSoMLSDP Prediction
            </h2>

            <p className="text-muted-foreground">
              Predict software defects using Hybrid Swarm Optimized ML
            </p>

          </Card>

        </div>

      </div>

    </div>
  );
};

export default Selection;
