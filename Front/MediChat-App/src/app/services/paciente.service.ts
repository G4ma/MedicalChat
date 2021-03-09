import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../models/Paciente';

@Injectable(
  // {providedIn: 'root'}
  )
export class PacienteService {
  baseURL = 'https://localhost:5001/api/pacientes';

constructor(private http: HttpClient) { }

  getPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.baseURL)
  }

  getPacientesByNome(nome: string): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.baseURL}/${nome}/nome`);
  }

  getPacienteById(id: number): Observable<Paciente> {
    return this.http.get<Paciente>(`${this.baseURL}/${id}`);
  }

}