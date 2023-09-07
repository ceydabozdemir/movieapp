import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MoviesComponent } from '../movies.component';
import { AlertifyService } from '../sevice/ alertify.service';
import { Movie } from 'src/app/models/movie';


describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MoviesComponent],
      providers: [AlertifyService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('component oluşturulmalı', () => {
    expect(component).toBeTruthy();
  });

  it('filmler ve popüler film arraylari başlatılmalı', () => {
    expect(component.movies).toBeDefined();
    expect(component.popularMovies).toBeDefined();
    expect(component.movies.length).toBeGreaterThan(0);
    expect(component.popularMovies.length).toBeGreaterThan(0);
  });

  it('listeye film eklemeli ve buton metnini güncellemeli', () => {
    const movie: Movie = {
        id: 1, title: 'Movie Title',
        description: '',
        imageUrl: '',
        isPopular: false,
        datePublished: undefined
    };
    const button = fixture.nativeElement.querySelector('.btn-outline-dark');
    
    component.addToList({ target: button }, movie);
    
    expect(button.innerText).toBe('Listeden Çıkar');
    expect(button.classList).toContain('btn-danger');
    expect(component.alertify.success).toHaveBeenCalledWith(movie.title + ' listene eklendi');
  });

  it('Filmi listeden kaldırmalı ve buton metni güncellemeli', () => {
    const movie: Movie = {
        id: 1, title: 'Movie Title',
        description: '',
        imageUrl: '',
        isPopular: false,
        datePublished: undefined
    };
    const button = fixture.nativeElement.querySelector('.btn-danger');
    
    component.addToList({ target: button }, movie);
    
    expect(button.innerText).toBe('Listeye Ekle');
    expect(button.classList).toContain('btn-outline-dark');
    expect(component.alertify.error).toHaveBeenCalledWith(movie.title + ' listeden çıkarıldı');
  });
});
