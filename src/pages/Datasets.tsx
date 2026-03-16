import { Card } from "@/components/ui/card";
import { Download, ArrowLeft } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useNavigate } from "react-router-dom";

const Datasets = () => {

  const navigate = useNavigate();

  const downloadDataset = (file: string) => {
    const link = document.createElement("a");
    link.href = `/datasets/${file}`;
    link.download = file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (

    <div className="min-h-screen flex items-center justify-center relative">

      <AnimatedBackground />

      <Card className="p-10 w-[500px] text-center relative z-10">

        {/* Back Button */}
        <div className="flex justify-start mb-4">
          <button
            onClick={() => navigate("/selection")}
            className="flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft size={18} />
            Back
          </button>
        </div>

        <h2 className="text-2xl font-bold mb-6">
          NASA MDP Datasets
        </h2>

        <div className="space-y-4">

          <div className="flex justify-between items-center">
            <span>KC1 Dataset</span>
            <button
              onClick={() => downloadDataset("kc1.csv")}
              className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg hover:bg-secondary/80"
            >
              <Download size={16} />
              Download
            </button>
          </div>

          <div className="flex justify-between items-center">
            <span>CM1 Dataset</span>
            <button
              onClick={() => downloadDataset("cm1.csv")}
              className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg hover:bg-secondary/80"
            >
              <Download size={16} />
              Download
            </button>
          </div>

          <div className="flex justify-between items-center">
            <span>JM1 Dataset</span>
            <button
              onClick={() => downloadDataset("jm1.csv")}
              className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg hover:bg-secondary/80"
            >
              <Download size={16} />
              Download
            </button>
          </div>

          <div className="flex justify-between items-center">
            <span>PC1 Dataset</span>
            <button
              onClick={() => downloadDataset("pc1.csv")}
              className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg hover:bg-secondary/80"
            >
              <Download size={16} />
              Download
            </button>
          </div>

          <div className="flex justify-between items-center">
            <span>PC2 Dataset</span>
            <button
              onClick={() => downloadDataset("pc2.csv")}
              className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg hover:bg-secondary/80"
            >
              <Download size={16} />
              Download
            </button>
          </div>

          <div className="flex justify-between items-center">
            <span>KC2 Dataset</span>
            <button
              onClick={() => downloadDataset("kc2.csv")}
              className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg hover:bg-secondary/80"
            >
              <Download size={16} />
              Download
            </button>
          </div>

          <div className="flex justify-between items-center">
            <span>KC3 Dataset</span>
            <button
              onClick={() => downloadDataset("kc3.csv")}
              className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg hover:bg-secondary/80"
            >
              <Download size={16} />
              Download
            </button>
          </div>

          <div className="flex justify-between items-center">
            <span>KC4 Dataset</span>
            <button
              onClick={() => downloadDataset("kc4.csv")}
              className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg hover:bg-secondary/80"
            >
              <Download size={16} />
              Download
            </button>
          </div>

          <div className="flex justify-between items-center">
            <span>MC1 Dataset</span>
            <button
              onClick={() => downloadDataset("mc1.csv")}
              className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg hover:bg-secondary/80"
            >
              <Download size={16} />
              Download
            </button>
          </div>

          <div className="flex justify-between items-center">
            <span>MC2 Dataset</span>
            <button
              onClick={() => downloadDataset("mc2.csv")}
              className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg hover:bg-secondary/80"
            >
              <Download size={16} />
              Download
            </button>
          </div>

          <div className="flex justify-between items-center">
            <span>MW1 Dataset</span>
            <button
              onClick={() => downloadDataset("mw1.csv")}
              className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg hover:bg-secondary/80"
            >
              <Download size={16} />
              Download
            </button>
          </div>

        </div>

      </Card>

    </div>
  );
};

export default Datasets;
