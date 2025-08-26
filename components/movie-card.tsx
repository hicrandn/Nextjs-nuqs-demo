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
import {
  Star,
  Play,
  Clock,
  Users,
  Globe,
  Award,
  DollarSign,
} from "lucide-react";

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
            {movie.Metascore && (
              <Badge variant="secondary" className="text-xs">
                Meta: {movie.Metascore}
              </Badge>
            )}
          </div>
          <CardDescription className="text-left">
            {movie.Plot || "No description available"}
          </CardDescription>
          {movie.Genre && (
            <p className="text-sm text-muted-foreground mt-2">
              <strong>Genre:</strong> {movie.Genre}
            </p>
          )}
          {movie.Director && (
            <p className="text-sm text-muted-foreground">
              <strong>Director:</strong> {movie.Director}
            </p>
          )}
          {movie.Actors && (
            <p className="text-sm text-muted-foreground">
              <strong>Cast:</strong> {movie.Actors}
            </p>
          )}
          <div className="flex flex-wrap gap-2 mt-2">
            {movie.Runtime && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="size-3" />
                <span>{movie.Runtime}</span>
              </div>
            )}
            {movie.Language && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Globe className="size-3" />
                <span>{movie.Language}</span>
              </div>
            )}
            {movie.Country && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <span>🌍</span>
                <span>{movie.Country}</span>
              </div>
            )}
          </div>
          {movie.Awards && movie.Awards !== "N/A" && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
              <Award className="size-3" />
              <span className="truncate">{movie.Awards}</span>
            </div>
          )}
          {movie.BoxOffice && movie.BoxOffice !== "N/A" && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
              <DollarSign className="size-3" />
              <span>{movie.BoxOffice}</span>
            </div>
          )}
        </CardContent>
      </div>
      <div className="px-4 pb-4">
        <CardFooter className="p-0">
          <Button className="w-full">
            <Play className="size-4 mr-2" />
            View Details
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
