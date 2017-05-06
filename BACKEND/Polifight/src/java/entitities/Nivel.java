/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Entidad para la tabla Nivel
 * @author 1013608348 - Edna Espejo
 */
@Entity
@Table(name = "nivel")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Nivel.findAll", query = "SELECT n FROM Nivel n"),
    @NamedQuery(name = "Nivel.findByIdNivel", query = "SELECT n FROM Nivel n WHERE n.idNivel = :idNivel"),
    @NamedQuery(name = "Nivel.findByIdMundo", query = "SELECT n FROM Nivel n WHERE n.idMundo = :idMundo"),
    @NamedQuery(name = "Nivel.findByNombreNivel", query = "SELECT n FROM Nivel n WHERE n.nombreNivel = :nombreNivel")})

public class Nivel implements Serializable {
    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id_nivel")
    protected int idNivel;

    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 20)
    @Column(name = "nombre_nivel")
    private String nombreNivel;
    
    @Basic(optional = false)
    @Column(name = "id_mundo")
    @JoinColumn(name = "id_mundo", referencedColumnName = "id_mundo", insertable = false, updatable = false)        
    @ManyToOne(optional = false)
    private int idMundo;

    public Nivel() {
    }
    
    public int getIdNivel() {
        return idNivel;
    }
    
    public void setIdNivel(int idNivel) {
        this.idNivel = idNivel;
    }

    public String getNombreNivel() {
        return nombreNivel;
    }

    public void setNombreNivel(String nombreNivel) {
        this.nombreNivel = nombreNivel;
    }

    public int getIdMundo() {
        return idMundo;
    }

    public void setIdMundo(int idMundo) {
        this.idMundo = idMundo;
    }

}
