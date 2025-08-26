import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import type { Movie } from "@/types";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star, Play } from "lucide-react";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card key={movie.imdbID} className="flex flex-col justify-between p-0">
      <CardHeader className="p-0 relative">
        <Badge className="absolute top-2 right-2">{movie.Year}</Badge>
        <Image
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder-movie.jpg"}
          alt={movie.Title}
          width={300}
          height={450}
          className="w-full h-[450px] object-cover rounded-t-lg"
        />
        <div className="px-4 pt-4">
          <CardTitle className="text-left min-h-[3rem] flex items-start leading-tight">
            {movie.Title}
          </CardTitle>
        </div>
      </CardHeader>
      <div className="flex-1">
        <CardContent className="px-4">
          <div className="flex items-center gap-2 mb-2">
            {movie.imdbRating && (
              <>
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{movie.imdbRating}</span>
              </>
            )}
          </div>
          <CardDescription className="text-left">
            {movie.Plot || "Açıklama mevcut değil"}
          </CardDescription>
          {movie.Genre && (
            <p className="text-sm text-muted-foreground mt-2">
              <strong>Tür:</strong> {movie.Genre}
            </p>
          )}
          {movie.Director && (
            <p className="text-sm text-muted-foreground">
              <strong>Yönetmen:</strong> {movie.Director}
            </p>
          )}
        </CardContent>
      </div>
      <div className="px-4 pb-4">
        <CardFooter className="p-0">
          <Button className="w-full">
            <Play className="size-4 mr-2" />
            Detayları Gör
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
